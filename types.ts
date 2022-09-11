export type User = {
    name: string;
    walletAddress: string;
}

export type Proof = {
    title: string;
    description: string;
    submittedBy: User;
}

export type Hypothesis = {
    title: string;
    description: string;
    proofs: Proof[];
    date: string;
    submittedBy: User
}