import React,{Component} from 'react';
import './football.css'
import axios from 'axios'

class ValidatingForm extends Component{

    constructor(props){p
        super(props);
        this.state={
            sno:'',
            animename:'',
            mainlead:'',
            noofepisodes:'',
            rating:''
        };
    }
    
    handleSnoChange=(event)=>{
        this.setState({sno:event.target.value})
    };
    handleAnimenameChange=(event)=>{
        this.setState({animename:event.target.value})
    };
    handleMainleadChange=(event)=>{
        this.setState({mainlead:event.target.value})
    };
    handleNoofepisodesChange=(event)=>{
        this.setState({noofepisodes:event.target.value})
    };
    handleRatingChange=(event)=>{
        this.setState({rating:event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            sno: this.state.sno,
            animename: this.state.animename,
            mainlead: this.state.mainlead,
            noofepisodes: this.state.noofepisodes,
            rating: this.state.rating
        };
        
        axios.post('http://127.0.0.1:8080/p', data)
    }

/*function ValidatingForm() {
    const initValues={sno:'',playerName:'',age:'',playerType:'',price:'',team:''}
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Za-z]") 

        if(!values.sno)
        errors.sno="S.No is Required";
        else if(preg.test(values.sno))
        errors.sno="S.No must contain only Numbers";

        if(!values.Animename)
        errors.playerName="Anime name is Required";
        else if(reg.test(values.Animename))
        errors.playerName="Anime name must contain only alphabets";
        
        if(!values.noofepisodes)
        errors.age="no of episodes is Required";
        else if(preg.test(values.noofepisodes))
        errors.age="No of episodes must contain only Numbers";

        if(!values.Maincharacter)
        errors.playerType="Main character name is Required";
        else if(reg.test(values.Maincharacter))
        errors.playerType="Main character name must contain only alphabets";

        if(!values.rating)
        errors.price="Rating is Required";
        else if(preg.test(values.rating))
        errors.price="rating must contain only Numbers";

        return errors;
    }*/
    render(){

    return ( 
        <><center>
        <div className='container'>
        <form onSubmit={this.handleSubmit}>
            <h1>????????????</h1>
            
            <div className='row'>
                <label>S.No : </label><br></br>
                <input type="number" id='sno' placeholder='S no' value={this.state.sno}
                    onChange={this.handleSnoChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.sno}</p> */}

            <div className='row'>
                <label>Anime Name: </label><br></br>
                <input type="text" id='animename' placeholder='  Enter the Anime name...' value={this.state.animename}
                    onChange={this.handleAnimenameChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.Animename}</p> */}
<div className='row'>
                <label>Main character :</label><br></br>
                <input type="text" id='mainlead' placeholder=' Main character ' value={this.state.mainlead}
                    onChange={this.handleMainleadChange}/>
                    </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.Maincharacter}</p> */}

            <div className='row'>
                <label>No of episodes : </label><br></br>
                <input type="number" id='noofepisodes' placeholder='  No of episodes  ' value={this.state.noofepisodes}
                    onChange={this.handleNoofepisodesChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.noofepisodes}</p> */}

            <div className='row'>
                <label>Rating :</label><br></br>
                <input type="number" id='rating' placeholder='  rating ' value={ this.state.rating}
                    onChange={this.handleRatingChange}/>
            </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.price}</p> */}
            
            {/* <p  style={{color:"red"}}>{formErrors.team}</p><br></br> */}

            <div className='row'>
                <button className='btn btn-primary'>Submit</button>
            </div>
        </form>
        </div></center>
        </>
     );
    }
}

export default ValidatingForm