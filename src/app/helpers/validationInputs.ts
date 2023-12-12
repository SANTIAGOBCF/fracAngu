export class validationInputs {
    static validateInputNumber(value: number) {
        if (value < 1) {
            value = 1;
        }
        return value
    }
}

