// Java program to demonstrate the working of the "Is a" Relationship (Inheritance):

class Faculty
{  
float salary=30000;  
}  
class Science extends Faculty
{ 
float bonous=2000;
public static void main(String args[])
{
Science obj=new Science(); 
System.out.println("Salary is:"+obj.salary);  
System.out.println("Bonous is:"+obj.bonous);  
}  
}