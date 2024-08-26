import { ClipLoader } from "react-spinners";
import { ITableColumn } from "../../types/types";
import './styles/table.css';

type Props = {
    columns: ITableColumn[],
    loading:boolean,
    error:boolean,
    children:React.ReactNode,
    rowClick?:(value:number)=>void,
};


export function Table({columns,loading,error,children,rowClick}:Props) {

    const handleRowClick = (rowIndex:number) => {
        if(rowClick){
            const rowData = columns[0];
            rowClick(rowData?.data[rowIndex]); 
        };
    };

    if(loading){
        return(
            <ClipLoader color="var(--primaryHover)"/>
        );        
    }
    else if (error){
        return(
            <div>Nastala chyba</div>
        );
    }
    else if (columns.length>0){
        const rowCount = columns[0].data.length;

        return(
            <div className="table-container">
                <h3>{children}</h3>
                <table>
                    <thead>
                        <tr>
                            {columns.map((column,index)=>(
                                <th key={index}>{column.head}</th>
                            ))}
                            
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: rowCount }).map((_, rowIndex) => (
                            <tr key={rowIndex} onClick={()=>handleRowClick(rowIndex)}>
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex}>{column.data[rowIndex]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return null;
};