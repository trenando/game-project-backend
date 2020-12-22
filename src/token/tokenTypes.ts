type UserId = {
    _id: string
};

export type GenerateToken = (userId:UserId) => string;

export type UserIdDecoder = (token:string) => string;

export type ExpireMin = (minutes: number) => Date;