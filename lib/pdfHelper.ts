import fs from 'fs';

export async function extractPdfText(filePath: string) {
  const { PDFParse }: any = await import('pdf-parse');

  const buffer = fs.readFileSync(filePath);

  // Create parser instance
  const parser = new PDFParse({ data: buffer });

  // Extract text
  const result = await parser.getText();
  //console.log('Extracted PDF Text:', result.text);
  return result.text;
}










