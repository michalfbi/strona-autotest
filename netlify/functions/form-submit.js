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

    const link = payload.link || payload.url || payload.Link_do_ogloszenia || "Brak linku";
    const phone = payload.phone || payload.telefon || payload.Numer_telefonu || "Brak telefonu";

    const finalData = {
      "Link_do_ogloszenia": link.startsWith("http") || link === "Brak linku" ? link : "https://" + link,
      "Numer_telefonu": phone,
      "_subject": "Nowy Lead (Auto Test)",
      "_captcha": "false",
      "_template": "table"
    };

    const response = await fetch("https://formsubmit.co/ajax/michalpakula12345@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(finalData)
    });

    const responseData = await response.json();

    return {
      statusCode: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ success: true, message: "Lead wysłany", response: responseData }),
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
