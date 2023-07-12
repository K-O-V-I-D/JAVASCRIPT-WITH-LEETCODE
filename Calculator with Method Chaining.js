class Calculator {
    constructor(initialValue = 0) {
        this.result = initialValue
    }

    add(value){
        this.result += value
        return this
    }

    subtract(value){
        this.result -= value
        return this
    }

    multiply(value) {
        this.result *= value
        return this
    }

    divide(divisor) {
        if (divisor === 0) {
            throw new Error("Division by zero is not allowed")
        } else {
            this.result /= divisor
            return this   
        }
    }

    power(exponent) {
        this.result = Math.pow(this.result, exponent)
        return this
    }

    getResult() {
        return this.result
    }

  }
