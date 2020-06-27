type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: { name: string; uid: StringOrNum }) => {
    console.log(`${user.name} say hello`);
};

const greet2 = (user: objWithName) => {
    console.log(`${user.name} say hello`);
};
