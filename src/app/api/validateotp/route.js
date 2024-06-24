export async function POST(req, res) {
  let data = await req.json();
  console.log(data);
  let apiKey = process.env.API_KEY_MTALKZ;

  let url = process.env.OTP_VALIDATE_API;
  console.log(
    `${url}?apiKey=${apiKey}&sessionid=${data.Session}&otp=${data.OTP}`
  );
  const response = await fetch(
    `${url}?apikey=${apiKey}&sessionid=${data.session}&otp=${data.OTP}`
  );

  const sessionResponse = await response.json();

  

  return Response.json(sessionResponse);
}
