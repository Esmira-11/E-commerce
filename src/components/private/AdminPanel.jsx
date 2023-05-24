import React from 'react'
import axios from "axios";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'image', headerName: 'Image', width: 130 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'price', headerName: 'Price', type: 'number', width: 90},
  ];

function AdminPanel() {

    const [products, setproducts] = useState([]);
    useEffect(() => {
        loadData();
      }, []);
    
      const loadData = () => {
        axios
          .get("https://fakestoreapi.com/products")
          .then((res) => {
            setproducts(res.data);
          })
          .catch((err) => {});
      };

  return (
    <div style={{ height: 400, width: '100%' }}>
        {
            products.map((product) =>(
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
        ))}
        
      
    </div>
  )
}

export default AdminPanel
