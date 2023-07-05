export const targetValidator = (target: string): string => {
    if (!target.trim()) 
        return "value is required!"
    else if (target.length > 20) 
        return "value is more than 20 symbols!"
    return target
}