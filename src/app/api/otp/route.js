export async function POST(req, res) {

    let data = await req.json();

     console.log(process.env.OTP_GENERATE_API , process.env.API_KEY_MTALKZ , process.env.SENDERID_MTALKZ)

    let url = process.env.OTP_GENERATE_API;
    data.apikey= process.env.API_KEY_MTALKZ;
    data.senderid= process.env.SENDERID_MTALKZ;
    data.message= "Hi there! Your One Time Password is {OTP} to authenticate your registration. PaintCraft - Grasim Industries";
    data.number= data.phone;
    data.format= "json";
    data.digit=6;
    data.intl= 1;
    console.log(data , "data");



    const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
 
  const Session = await response.json()
  
 
  return Response.json(Session)
};