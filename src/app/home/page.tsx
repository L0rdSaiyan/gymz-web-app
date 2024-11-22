import Card from "../components/Card/Card";

export default function Home()
{
    return(
         <div className="w-full h-screen flex justify-center items-center ">
            <div className="w-full h-[80%] flex flex-col justify-center items-center sm:flex-col md:flex-col lg:flex-row xl:flex-row">
                <Card day="Domingo"></Card>
                <Card day="Segunda-Feira"></Card>
                <Card day="Terça-Feira"></Card>
                <Card day="Quarta-Feira"></Card>
                <Card day="Quinta-Feira"></Card>
                <Card day="Sexta-Feira"></Card>
                <Card day="Sábado"></Card>
            </div>
         </div>
         
       
    )
}