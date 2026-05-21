export const handler = async (event) => {
  try {
    const payload = event.body ? JSON.parse(event.body) : {};
    
    let link = payload.Link_Do_Ogloszenia || payload.Wklejony_Link || "";
    let phone = payload.Numer_Telefonu || "";
    
    link = link.trim();
    if (link && !/^https?:\/\//i.test(link)) {
      link = 'https://' + link;
    }

    const submission = {
      "Link do ogłoszenia": link,
      "Numer telefonu": phone,
      _subject: payload._subject || "Szybki Lead z głównego formularza Hero - Auto Test",
    };

    const response = await fetch("https://formsubmit.co/ajax/michalpakula12345@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(submission),
    });

    const responseText = await response.text();
    return {
      statusCode: response.ok ? 200 : response.status,
      headers: { "Content-Type": "application/json" },
      body: responseText,
    };
  } catch (error) {
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
