export class AppUser {
    id: number;
    username: string;
    password: string;
    employeeId: number;
    role: string[];

	constructor(id: number, username: string, password: string, employeeId: number, role: string[]) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.employeeId = employeeId;
        this.role = role;
	}
}
