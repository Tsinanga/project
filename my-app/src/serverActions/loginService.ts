"use server";

interface loginInterface{
    email:string,
    password:string
}

export const \
 = (loginData:loginInterface)=>{
    console.log(loginData);
}