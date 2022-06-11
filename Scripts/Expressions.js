class Expression {

    constructor(lhs, rhs, operator) {
        this.lhs = lhs;
        this.rhs = rhs;
        this.operator = operator;
    }

    getLHS() {
        return this.lhs;
    }

    getRHS() {
        return this.rhs;
    }

    getOperator() {
        return this.operator;
    }

    setLHS(left) {
        return new Expression(left, this.rhs, this.operator);
    }

    setRHS(right) {
        return new Expression(this.lhs, right, this.operator);
    }
    
   setOperator(newOperator) {
        return new Expression(this.lhs, this.rhs, newOperator);
    }

    eval() {
        switch(this.operator) {
            case '+':
                return parseFloat(this.lhs) + parseFloat(this.rhs);
            case '-':
                return parseFloat(this.lhs) - parseFloat(this.rhs);
            case '×':
                return parseFloat(this.lhs) * parseFloat(this.rhs);
            case '÷':
                if(parseFloat(this.rhs) == 0) {
                    throw new Error("CANNOT DIVIDE BY ZERO");
                }
                return parseFloat(this.lhs) / parseFloat(this.rhs);
            default:
                throw new Error("Operator can not be evaluated");
        }
    }
}