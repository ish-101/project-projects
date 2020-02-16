type Person = {
    role: string;
    interests: string[];
    name: Name;
    project: string;
    email: string;
    about: string;
    phone?: string;
    found?: boolean;
};

type Name = {
    first: string;
    last: string;
};

export default Person;