export const handler = async (event) => {
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

    const params = new URLSearchParams();
    
    for (const [key, value] of Object.entries(payload)) {
      if (key === 'link' || key === 'Link_do_ogloszenia') {
        const url = value.startsWith('http') ? value : 'https://' + value;
        params.append('Link_do_ogloszenia', url);
      } else if (key === 'phone' || key === 'Numer_telefonu') {
        params.append('Numer_telefonu', value);
      } else {
        params.append(key, value);
      }
    }
    
    if (!payload._subject) params.append('_subject', 'Nowy Lead (Auto Test)');
    if (!payload._captcha) params.append('_captcha', 'false');

    const response = await fetch("https://formsubmit.co/michalpakula12345@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      },
      body: params.toString()
    });

    const responseText = await response.text();
    return {
      statusCode: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ success: true, message: responseText }),
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
