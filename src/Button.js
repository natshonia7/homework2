export default function Button({ text, onClick, type }) {
  
  return (
    <div className="button">
     <button onClick={onClick}
     
     type={type}
     > 
     {text}
     
     </button>
       
    </div>
  );
}

