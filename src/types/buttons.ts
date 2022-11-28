export type Button ={
    bgcolor: string;
    color:string;
    children:string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
   
}