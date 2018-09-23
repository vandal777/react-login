import {
    toolConstants
} from "../_constants/tool.constants";
import {
    toolService
} from '../_services/tool.service';

export const toolActions = {
    getAll,
    addTool,
};

function addTool(tool) {
    return dispatch => {
        dispatch(request(tool));

        toolService.addTool(tool)
            .then(
                tool => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: toolConstants.ADDTOOLS_REQUEST } }
    function success(tools) { return { type: toolConstants.ADDTOOLS_SUCCESS, tools } }
    function failure(error) { return { type: toolConstants.ADDTOOLS_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());
        toolService.getAll()
            .then(
                tools => dispatch(success(tools)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: toolConstants.GETTOOLS_REQUEST } }
    function success(tools) { return { type: toolConstants.GETTOOLS_SUCCESS, tools } }
    function failure(error) { return { type: toolConstants.GETTOOLS_FAILURE, error } }
}
/*
export const tools = [{
        "id": "5b9fea60dac7be2035c26247",
        "description": "Ullamco excepteur sit irure id veniam elit incididunt culpa exercitation voluptate. Amet consectetur do velit mollit aliqua tempor cillum aliqua Lorem anim ad pariatur laborum. Lorem officia enim duis et fugiat labore culpa. Tempor mollit incididunt ut adipisicing do consequat ipsum qui mollit proident. Ut minim sunt culpa dolore incididunt dolore exercitation Lorem officia nulla.",
        "name": "Martell",
        "greeting": "Soc un martell i puc fer molt de mal",
        "link": "/src/Img/martillo.jpg"
    },
    {
        "id": "5b9fea605f39d3c57c20568c",
        "description": "Incididunt id elit non ullamco dolore non aute anim pariatur exercitation. Duis cupidatat reprehenderit sunt anim nisi ad ipsum anim nisi velit consequat. Sunt deserunt incididunt pariatur exercitation ipsum minim aute enim. Reprehenderit qui pariatur ex amet reprehenderit culpa ea nostrud et adipisicing. Elit quis eu consequat cillum labore reprehenderit cillum culpa aliquip consequat velit.",
        "name": "Jeannette",
        "greeting": "Soc un/a, Jeannette!"
    },
    {
        "id": "5b9fea60aa56baa777623742",
        "description": "Eiusmod velit occaecat sunt exercitation commodo enim et laborum. Sint esse magna labore anim nostrud nisi sunt in in sunt labore. Esse labore minim duis commodo.",
        "name": "Bentley",
        "greeting": "Soc un/a, Bentley!"
    },
    {
        "id": "5b9fea60e448a17cc332d82b",
        "description": "Ea irure amet ex incididunt aute in amet esse sint. Exercitation qui laborum sunt nisi fugiat eiusmod minim labore laboris est. Eu velit ex nostrud cupidatat duis mollit. Sint aliqua labore commodo consequat reprehenderit sunt sunt et aliqua. Ex esse sit pariatur veniam voluptate. Sint elit voluptate sit Lorem ad veniam sit duis minim mollit.",
        "name": "Ellison",
        "greeting": "Soc un/a, Ellison!"
    },
    {
        "id": "5b9fea60c1ade31bbcc1485f",
        "description": "Nulla laboris ullamco laboris ex qui in id ad incididunt irure amet. Eu eu nulla sunt tempor adipisicing tempor ex consectetur. Nisi enim et sunt quis non fugiat tempor sit laboris laboris officia eiusmod consequat non. Laborum aliqua ullamco sint veniam.",
        "name": "Potts",
        "greeting": "Soc un/a, Potts!"
    },
    {
        "id": "5b9fea605807ece9e5bcb6c1",
        "description": "Ipsum qui qui est elit reprehenderit non. Sunt id enim duis proident. Consectetur laboris qui laboris do. Voluptate occaecat laborum ea officia esse esse excepteur occaecat et et laboris incididunt quis. Velit duis sit duis elit esse aliqua adipisicing cillum do est sit exercitation eu.",
        "name": "Winters",
        "greeting": "Soc un/a, Winters!"
    },
    {
        "id": "5b9fea60f717be62790a46c6",
        "description": "Et ea mollit ea ut cillum id mollit veniam in tempor labore excepteur ut. Ipsum cupidatat in culpa cupidatat incididunt adipisicing. Excepteur enim fugiat occaecat occaecat.",
        "name": "Irma",
        "greeting": "Soc un/a, Irma!"
    },
    {
        "id": "5b9fea6028803b05e51f514d",
        "description": "Anim reprehenderit minim nulla sint quis velit cupidatat non exercitation et occaecat nisi. Officia esse aliqua aliqua consequat esse proident nulla elit cillum eiusmod nulla aliquip. Ea adipisicing fugiat cillum sint non laborum ullamco elit tempor ipsum aliquip deserunt irure proident. Irure esse irure irure in deserunt duis consequat ullamco duis commodo aliquip. In laborum nisi minim aliquip velit et veniam nostrud reprehenderit. Exercitation minim fugiat nisi veniam quis veniam tempor adipisicing officia. Non occaecat minim velit exercitation.",
        "name": "Ray",
        "greeting": "Soc un/a, Ray!"
    },
    {
        "id": "5b9fea603c5f18258b0abc9d",
        "description": "Ex duis labore sit incididunt elit velit. In labore eiusmod tempor excepteur ad pariatur incididunt in excepteur velit nisi nisi in excepteur. Aliquip do officia sint est eiusmod ea. Labore labore ipsum consectetur cillum excepteur. Sint minim reprehenderit cillum id dolore id aliquip voluptate est esse nisi non. Deserunt eu ut velit laborum.",
        "name": "Arline",
        "greeting": "Soc un/a, Arline!"
    },
    {
        "id": "5b9fea60286697f991eb841f",
        "description": "Enim labore consectetur tempor qui aliquip Lorem minim quis et consectetur ea. Dolor sunt anim nulla exercitation. Magna sint elit ea eiusmod.",
        "name": "Watts",
        "greeting": "Soc un/a, Watts!"
    }
]

function getAll() {
    return dispatch => {
        dispatch(request());
        dispatch(success(tools));
    }

    function request() {
        return {
            type: toolConstants.GETTOOLS_REQUEST
        }
    }

    function success(tools) {
        return {
            type: toolConstants.GETTOOLS_SUCCESS,
            tools
        }
    }
}*/
