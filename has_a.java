// Java program to demonstrate the working of the  "Has a" Relationship (Composition)

class Employee
{  
float salary=30000;  
}  
class Developer extends Employee
{ 
float bonous=2000;
public static void main(String args[])
{
Employee obj=new Employee();
System.out.println("Salary is:"+obj.salary);  
}  
}