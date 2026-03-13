import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const config = await request.json();
    
    // プロジェクトルートに設定ファイルを書き出し
    const filePath = path.join(process.cwd(), 'current-layout-design.json');
    fs.writeFileSync(filePath, JSON.stringify(config, null, 2));

    return NextResponse.json({ success: true, message: 'Configuration saved to disk.' });
  } catch (error) {
    console.error('Sync Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to write config file.' }, { status: 500 });
  }
}
