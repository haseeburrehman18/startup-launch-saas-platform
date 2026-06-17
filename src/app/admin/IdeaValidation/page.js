import React from 'react'
import Ideavalidation from '../../../components/ideavalidation'
import Targetcustomer from '../../../components/ideavalidationtargetcustomer'
import Ideavalidationcomptitor from '../../../components/ideavalidationcomptitor'


function page() {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <div><Ideavalidation /></div>
            <div className='p-5'>
                <div className='p-5 rounded-2xl bg-white mb-2'>
                    <div className='text-lg font-bold'>
                        Target Customer Personas
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <Targetcustomer title={"Eco-Concious Emma"} s_age={"28"} e_age={"35"} s_budget={"$60K"} e_budget={"$90K"} trait={["Environmentally aware","Health-focused","Tech-savy","Urban-dweller"]} />
                        <Targetcustomer title={"Busy Professional Brain"} s_age={"30"} e_age={"40"} s_budget={"$80K"} e_budget={"$120K"} trait={["Environmentally aware","Health-focused","Tech-savy","Urban-dweller"]} />
                        <Targetcustomer title={"Millenial Parent Maya"} s_age={"32"} e_age={"38"} s_budget={"$70K"} e_budget={"100K"} trait={["Environmentally aware","Health-focused","Tech-savy","Urban-dweller"]} />
                                           </div>
                </div>
            </div>
            <div className='p-5'>
                <div className='p-5 rounded-2xl bg-white mb-4'>
                    <div className='text-lg font-bold mb-4'>
                        Competitor Analysis
                    </div>
                    <div><Ideavalidationcomptitor /></div>
                </div>
            </div>


        </div>
    )
}

export default page