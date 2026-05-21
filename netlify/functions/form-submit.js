export const handler = async (event) => {
  try {
    const payload = event.body ? JSON.parse(event.body) : {};
    const link = payload.link || "Brak linku";
    const phone = payload.phone || "Brak telefonu";

    // Zmiana na x-www-form-urlencoded wymusza na FormSubmit poprawne parsowanie pól
    const params = new URLSearchParams();
    params.append("Link_do_ogloszenia", link.startsWith("http") ? link : "https://" + link);
    params.append("Numer_telefonu", phone);
    params.append("_subject", "Nowy Lead (Auto Test)");
    params.append("_captcha", "false");

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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true, message: responseText }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
