import { NextRequest, NextResponse } from "next/server";


const data = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane.doe@example.com",
    },
    {
        id: 3,
        name: "Bob Smith",
        email: "bob.smith@example.com",
    },
];
export async function GET(request: NextRequest) {
    // console.log(request)

    const {searchParams} = new URL(request.url);
    const id = searchParams.get('id');

    if (id){
        const dataDetail = data.find(item => item.id === Number(id));
        if(!dataDetail){
            return NextResponse.json({ status: 404,
                message: "Data not found"
            });
        }
        return NextResponse.json({ status: 200,
            message: "Success", data: dataDetail
        });
    }

    return NextResponse.json({ status: 200,
        message: "Success", data: data
    });

 
}
