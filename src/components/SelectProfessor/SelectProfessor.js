import React, { Component } from 'react';
import { Dropdown, Option } from "./Dropdown";
import './SelectProfessor.css';

class SelectProfessor extends Component {
    render() {
        return (
            <>
                <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />

                </head>
                <h4>Select a professor</h4>
                <div class="list-group">
                    <button type="button" class="list-group-item list-group-item-action">Mouna Kacem</button>
                    <button type="button" class="list-group-item list-group-item-action">Hobbes Legault</button>
			    </div>
                <h4>Select a TA</h4>
                <div class="dropdown">
                    <Dropdown
                    buttonText="Choose  "
                    action="/"
                    >
                    <Option selected value="Choose Your TA" />
                    <Option value="Michelle Jensen" />
                    <Option value="Ashley Samuelson" />
                    <Option value="Abishek Kumar" />
                    <Option value="Aisha Mohamed" />
                    <Option value="Evangelia Gergatsouli" />
                    <Option value="Hang Yin" />
                    <Option value="Himanshu Sagar" />
                    <Option value="Kushagra Kapil" />
                    <Option value="Makesh Sreedhar" />
                    <Option value="Mingrui Liu" />
                    <Option value="Preeti Nayak" />
                    <Option value="Yiwei Zhang" />
                    </Dropdown>
                </div>
                <h4>Select a Peer Mentor</h4>
                <div class="dropdown">
                    <Dropdown
                    buttonText="Choose"
                    action="/"
                    >
                    <Option selected value="Choose Your Peer Mentor" />
                    <Option value="Aayush Dani" />
                    <Option value="Aryaman Agarwal" />
                    <Option value="David Khachatryan" />
                    <Option value="Eung Kim" />
                    <Option value="Haoduo Sun" />
                    <Option value="Kedar Bhide" />
                    <Option value="Nishit Saraf" />
                    <Option value="Ojas Sethi" />
                    <Option value="Sunandi Xi Yue Goh" />
                    <Option value="Trevor Wallis" />
                    </Dropdown>
                </div>
            </>
        )
    }
}
export default SelectProfessor;