export const handler = async (event) => {
  try {
    const payload = event.body ? JSON.parse(event.body) : {};
    const submission = {
      ...payload,
      _subject: payload._subject || "Nowe zgłoszenie kontaktowe - Auto Test",
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
    const headers = { "Content-Type": "application/json" };

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: responseText }),
      };
    }

    return {
      statusCode: 200,
      headers,
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