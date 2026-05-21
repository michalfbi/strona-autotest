export const handler = async (event) => {
  try {
    const payload = event.body ? JSON.parse(event.body) : {};
    
    const response = await fetch("https://formsubmit.co/ajax/michalpakula12345@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
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
