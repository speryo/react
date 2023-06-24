import React from "react";

export default (props) =>
<div>
    <p>
        Atendimento: {props.atend}
    </p>
    <p>
        Nome: {props.nome}
    </p>
    <p>
        Especialidade: {props.espc}
    </p>
    <p>
        Prioridade: {props.prio}
    </p>
    <p>
        Local de atendimento: {props.local}
    </p>
</div>