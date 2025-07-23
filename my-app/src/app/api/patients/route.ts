import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, age, email } = body;

    if (!name || !email || !age) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
      
    }
    

    const newPatient = await prisma.patient.create({
      data: {
        name,
        age: Number(age),
        email,
      },
    });

    return new Response(JSON.stringify({ message: 'Patient added successfully', patient: newPatient }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to add patient' }), { status: 500 });
  }
  
}
