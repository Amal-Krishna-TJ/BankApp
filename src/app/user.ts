export interface User {
    id: number,
    accountNumber: number,
    name: string,
    password: string,
    email: string,
    balance: number
}

export interface Transaction {
    id?: number,
    accountNumber: number,
    type: string,
    amount: number,
    balance: number,
    date: string
}
