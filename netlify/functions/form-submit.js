const https = require('https');

exports.handler = async (event, context) => {
  try {
    let payload = {};
    if (event.body) {
      try {
        payload = JSON.parse(event.body);
      } catch (e) {
        const params = new URLSearchParams(event.body);
        for (const [key, value] of params.entries()) {
          payload[key] = value;
        }
      }
    }

    const link = payload.link || payload.Link_do_ogloszenia || "Brak linku";
    const phone = payload.phone || payload.Numer_telefonu || "Brak telefonu";
    const formattedLink = link.startsWith("http") || link === "Brak linku" ? link : "https://" + link;

    const postData = JSON.stringify({
      "Link_do_ogloszenia": formattedLink,
      "Numer_telefonu": phone,
      "_subject": "Nowy Lead (Auto Test)",
      "_captcha": "false",
      "_template": "table"
    });

    const options = {
      hostname: 'formsubmit.co',
      port: 443,
      path: '/ajax/michalpakula12345@gmail.com',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const responseData = await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => { resolve(data); });
      });

      req.on('error', (e) => { reject(e); });
      req.write(postData);
      req.end();
    });

    return {
      statusCode: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ success: true, message: "Lead wysłany pomyślnie", details: responseData }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
