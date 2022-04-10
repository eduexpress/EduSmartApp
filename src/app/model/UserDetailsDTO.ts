export class UserDetailsDTO {
  public constructor(
    public fullName:string,
    public email:string,
    public password:string,
    public avatar:any,
    public registerDate:Date,
  ) {
  }
}
