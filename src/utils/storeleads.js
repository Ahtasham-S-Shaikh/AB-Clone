"use server";
import prisma from "../../prisma/prisma";

const storeLeads = async (data) => {
  try {
    const formdata = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const user = await prisma.user.create({
      data: {
        email: data?.email,
        first_name: data?.firstName,
        last_name: data?.lastName,
        mobileNumber: data?.mobilePhone,
        city: data?.City__c,
        LeadSource: data?.LeadSource,
        Campaign_Medium__c: data?.Campaign_Medium__c,
        Campaign_Name__c: data?.Campaign_Name__c,
        Campaign_Source__c: data?.Campaign_Source__c,
      },
    });

    const sdfcResponse = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL,
      formdata
    );

    const finalResponse = await sdfcResponse.json();
    if (sdfcResponse.ok) {
      return finalResponse;
    } else {
      await prisma.failedUserLog.create({
        data: {
          userId: user.id,
          error: finalResponse,
        },
      });
    }
  } catch (error) {
    console.log(error);
    await prisma.failedUserLog.create({
      data: {
        error: {
          message: error.message,
        },
      },
    });
  }
};

const userExistsCheck = async (phone) => {
  try {
    const THIRTY_DAYS_AGO = new Date();
    THIRTY_DAYS_AGO.setDate(THIRTY_DAYS_AGO.getDate() - 30);
    console.log(phone);
    const userExists = await prisma.user.findMany({
      where: {
        mobileNumber: phone,
        createdAt: {
          gte: THIRTY_DAYS_AGO,
        },
      },
    });

    return userExists.length === 0 ? false : true;
  } catch (error) {
    console.log(error);
    await prisma.failedUserLog.create({
      data: {
        error: {
          message: error.message,
        },
      },
    });
  }
};

export { storeLeads, userExistsCheck };
