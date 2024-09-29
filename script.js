document
  .getElementById("otpForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phoneNumber").value;
    if (phoneNumber.length > 10) {
      alert("Phone Number Must Have 10 Digits");
      return;
    } else if (phoneNumber.length < 10) {
      alert("Phone Number Must Have 10 Digits");
      return;
    }
    const payload = {
      apiKey: "6wbceG3YP2TMlFhIsENJCjy7Xz8tQ4ko",
      token: "vxw4tlopdygk0bhnu65jma3c1e98fsqz",
      phone: phoneNumber,
      otpLength: 122135,
      message: "Your OTP code is: {otp}",
    };
    const response = await fetch("https://otp.dev/api/verify/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    console.log(response);
    alert(`OTP sent to ${phoneNumber}`);
  });
