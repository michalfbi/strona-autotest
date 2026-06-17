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

    // Obsługa dla formularza kontaktowego
    if (payload.name && payload.email && payload.message) {
      const postData = JSON.stringify({
        "Imię i Nazwisko": payload.name || "Brak",
        "Email": payload.email || "Brak",
        "Telefon": payload.phone || "Brak",
        "Wiadomość": payload.message || "Brak",
        "_subject": payload._subject || "Nowe zgłoszenie kontaktowe - Autotest",
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
        body: JSON.stringify({ success: true, message: "Wiadomość wysłana pomyślnie", details: responseData }),
      };
    }
    // Obsługa dla formularza leada (stara struktura)
    else {
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
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      statusCode: 500,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ success: false, error: error.message || "Błąd podczas wysyłania formularza" }),
    };
  }
};
