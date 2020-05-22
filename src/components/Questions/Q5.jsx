import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import coverlogo from '../../asserts/pic/logo.png';
import q1title from '../../asserts/pic/FashionM&A5.png';
import q5qtitle from '../../asserts/pic/q5qtitle.png';
import q5a from '../../asserts/pic/q5a.png';
import q5b from '../../asserts/pic/q5b.png';
import q5p from '../../asserts/pic/q5p.png';
import q5next from '../../asserts/pic/nextq.png';

export class Q5 extends Component{
    constructor(props){
        super(props);
        
        this.onSelection = this.onSelection.bind(this);

        this.state = {
            totalscore: this.props.match.params.score,
            thisscore:0,
            selected: ""
        }
    }
    
    onSelection(score,opt,e){
        if(this.state.selected !== opt)
        {
            this.setState ({
                thisscore : score,
                selected : opt
            })
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-q1-logo">
                    <img src={coverlogo} alt="altcoverlogo"></img>
                </div>
                <div className="App-q1-background">
                    <div className="App-q1-q1title">
                        <img src={q1title} alt="q1title"></img>
                    </div>
                    <div className="App-q5-q5qtitle">
                        <img src={q5qtitle} alt="q5qtitle"></img>
                    </div>
                    <div className="App-q5-q5optioinA" onClick={(e)=>this.onSelection(5,"a",e)}>
                        <img src={q5a} alt='q5a'></img>
                    </div>
                    <div className="App-q5-q5optioinB" onClick={(e)=>this.onSelection(10,"b",e)}>
                        <img src={q5b} alt='q5b'></img>
                    </div>
                    <Link to={()=> { return '/fillname/' + (Number(this.state.thisscore) + Number(this.state.totalscore))}}>
                        <div className="App-q5-circle-p">
                            <img src={q5next} alt='next'></img>
                        </div>
                    </Link>
                </div>
                <div className="App-q5-q5p">
                        <img src={q5p} alt='q5p'></img>
                </div>
            </div>
        )
    }
}