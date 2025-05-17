interface ExpectedFileStructure {
  name?: string
  description?: number
}

export async function validateJsonFile(
  file: File,
  requiredFields: Array<keyof ExpectedFileStructure>
): Promise<{ success: true; data: ExpectedFileStructure } | { success: false; error: string }> {
  if (file.type !== 'application/json') {
    return { success: false, error: 'Файл должен быть в формате JSON.' }
  }

  try {
    const fileContent = await file.text()
    const parsedData: ExpectedFileStructure = JSON.parse(fileContent)
    const missingFields = requiredFields.filter(field => !(field in parsedData))

    if (missingFields.length > 0) {
      return {
        success: false,
        error: `В файле отсутствуют обязательные поля: ${missingFields.join(', ')}`,
      }
    }

    return { success: true, data: parsedData }
  } catch (error) {
    return { success: false, error: 'Неверный формат JSON.' }
  }
}
