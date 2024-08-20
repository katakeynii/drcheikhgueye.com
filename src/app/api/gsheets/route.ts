import {google} from "googleapis"
import { sheets_v4 } from './v4'
// export async function GET(request: Request, res) {
//     return new Response('Hello, Baaay.js!')
//   }
const getSheets = async () : sheets_v4.Sheets => {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
            private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets.readonly',
            'https://www.googleapis.com/auth/spreadsheets'
        ]
    })
    const sheets : sheets_v4.Sheets = google.sheets({ version: 'v4', auth: auth })
    return sheets
}
export  async function GET(request: Request) {
    const sheets = await getSheets();
    const range = "Downloads!A:Z"

    try{
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
            range
        })
        const appendResponse = sheets.spreadsheets.values.append({
            range: range,
            spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
                values: [
                    ["Mohamed", "Gainde@gamil.com", "GOGOOO"]
                ]
            }
        })
        return new Response(JSON.stringify({ data: response.data}), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    catch(error){
        console.error(error)
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    
}

// app/api/user/route.ts
export async function POST(request: Request) {
    const sheets = await getSheets();
    const range = "Downloads!A:Z"

    try{
        const body = await request.json();
        const { name, email, whatsapp } = body;
        const response = sheets.spreadsheets.values.append({
            range: range,
            spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
                values: [
                    [name, email, whatsapp]
                ]
            }
        })
        return new Response(JSON.stringify({ data: response.data}), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    catch(error){
        console.error(error)
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
