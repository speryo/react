
import ComponenteQuatro from "./components/hospital";

function app(){
    return(
        <div>
            <ComponenteQuatro atend="01" nome="José da Silva" espc="Geral" prio="Normal" local="Triagem"/>
            <ComponenteQuatro atend="02" nome="Maria das Dores" espc="Ortopedia" prio="Urgência" local="Consultório B"/>
        </div>
    )
}

export default app