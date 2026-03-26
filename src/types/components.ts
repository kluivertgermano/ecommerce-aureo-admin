export type TitlePage = {
    title: string;
    description: string;
}

export type Alerta = {
    title: string;
    description: string;
    status: string;
}

export type Relatorios = {
    data: any;
    error: any;
    isLoading: boolean;
}

export type ANY = {
    data: any;
}

export type Pesquisar = {
    setMesclar: any;
    loading:boolean;
}

export type Pag = {
    data: any;
    getNewDatas: ()=>{};
}