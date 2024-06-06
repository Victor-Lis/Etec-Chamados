"use server"

import prisma from "@/lib/prisma"

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

export async function isAuthorized(){
    "use server"
    // let sessionUser = await getServerSession(authOptions);
    // console.log("sessionUser", sessionUser)
    // if(!!!sessionUser) return redirect("/")
    // let user = await prisma.atendentes.findFirst({
    //     where: {
    //         email: sessionUser?.user?.email as string
    //     }
    // })
    // if(!!!user) return redirect("/")
}