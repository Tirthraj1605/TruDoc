import streamlit as st
import plotly.express as px
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer

data = pd.read_csv('dataset.csv')

def recommend_rest(str):
    
    df=pd.read_csv('dataset.csv')

    for i in range(len(df['s'])):
        if str == list(df['s'])[i]:
            id = i

    cv=CountVectorizer(max_features=110)
    vectors=cv.fit_transform(df['symp']).toarray()

    similarity=cosine_similarity(vectors)
    listt = sorted(list(enumerate(similarity[id])),reverse=True,key=lambda x:x[1])
    for i in range(len(listt)):
        listt[i] = list(listt[i])

    new_listt = []

    # temp = listt[5]
    # if temp[1] < 0.9:
    #     new_listt.append(temp)
    # else:
    #     for i in range(len(listt)):
    #         temp = listt[i]
    #         if temp[1] > 0.9:
    #             new_listt.append(temp)

    # for i in range(len(new_listt)):
    #     temp = new_listt[i]
    #     temp[1] = float(temp[1]) * get_weight(temp[0], df)

    sorted_new_listt = sorted(new_listt, key=lambda x:x[1],reverse=True)[0:6]

    recommended_restaurants=[]
    for lists in sorted_new_listt:
        id = lists[0]
        recommended_restaurants.append([list(df['s'])[id]])

    return recommended_restaurants

# def get_location(df):
#     fig = px.density_mapbox(df, lat="Latitude", lon="Longitude", z="AverageCost",hover_name="Area",color_continuous_scale='Turbo', mapbox_style="stamen-terrain",opacity=0.5,height=900,width=900)
#     fig.update_layout(mapbox_style="open-street-map", mapbox_zoom=11, mapbox_center_lat = 12.9716, mapbox_center_lon = 77.5946)
#     # fig.show(width=9000, height=9000)
#     return fig

# def recommend_loc(str):
#     same_loc = []
#     for i in range(len(list(df['Area']))):
#         if str == list(df['Area'])[i]:
#             same_loc.append(i)
#     for i in range(len(same_loc)):
#         id = same_loc[i]
#         same_loc[i] = [ id, list(df['weighted_dine'])[id] + list(df['weighted_deli'])[id] ]
#     sorted_list = sorted(same_loc,key=lambda x:x[1],reverse=True)[0:6]
#     recommended_restaurants=[]
#     for lists in sorted_list:
#         id = lists[0]
#         recommended_restaurants.append(list(df['Name'])[id])
#     return recommended_restaurants
    
df = pd.read_csv('dataset.csv')
df = df.set_index('ID')

#fig = get_location(df)

symp_list = ['itching', 'skin_rash', 'nodal_skin_eruptions', 'dischromic _patches',			
 'continuous_sneezing', 'shivering', 'chills', 'watering_from_eyes',		
 'stomach_pain', 'acidit','ulcers_on_tongue', 'vomiting', 'cough', 'chest_pain',			
'itching', 'vomiting', 'yellowish_skin', 'nausea', 'loss_of_appetite', 'abdominal_pain', 'yellowing_of_eyes',			
 'skin_rash', 'stomach_pain', 'burning_micturition','spotting_ urination',		
 'vomiting', 'loss_of_appetite', 'abdominal_pain', 'passage_of_gases', 'internal_itching',			
 'patches_in_throat', 'high_fever',' extra_marital_contacts',			
 'fatigue', 'weight_loss', 'restlessness', 'lethargy', 'irregular_sugar_level', 'blurred_and_distorted_vision', 'obesity', 'excessive_hunger', 'increased_appetite', 'polyuria',		
 'vomiting', 'sunken_eyes', 'dehydration', 'diarrhoea',			
 'fatigue', 'cough', 'high_fever', 'breathlessness', 'family_history',' mucoid_sputum',		
 'headache', 'chest_pain', 'dizziness', 'loss_of_balance', 'lack_of_concentration',		
 'indigestion', 'headache', 'blurred_and_distorted_vision',' excessive_hunger', 'stiff_neck', 'depression', 'irritability', 'visual_disturbances',		
 'weakness_in_limbs', 'neck_pain', 'dizziness', 'loss_of_balance',			
 'vomiting', 'headache', 'weakness_of_one_body_side', 'altered_sensorium',			
'itching', 'vomiting', 'fatigue', 'weight_loss', 'high_fever', 'yellowish_skin', 'dark_urine', 'abdominal_pain',			
 'chills', 'vomiting', 'high_fever', 'sweating', 'headache', 'nausea', 'muscle_pain',			
'itching', 'skin_rash', 'fatigue',' lethargy', 'high_fever', 'headache', 'loss_of_appetite','mild_fever', 'swelled_lymph_nodes', 'malaise', 'red_spots_over_body',			
'skin_rash', 'chills', 'joint_pain', 'vomiting','fatigue ', 'high_fever', 'headache, nausea', 'loss_of_appetite', 'pain_behind_the_eyes',' back_pain', 'muscle_pain', 'red_spots_over_body',			
 'chills','vomiting', 'fatigue', 'high_fever', 'nausea', 'constipation', 'abdominal_pain', 'diarrhoea', 'toxic_look_typhos', 'belly_pain',			
 'joint_pain', 'vomiting', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'abdominal_pain', 'diarrhoea','mild_fever', 'yellowing_of_eyes', 'muscle_pain',			
'itching', 'fatigue', 'lethargy', 'yellowish_skin', 'dark_urine', 'loss_of_appetite', 'abdominal_pain', 'yellow_urine',' yellowing_of_eyes', 'malaise','receiving_blood_transfusion', 'receiving_unsterile_injections',			
 'fatigue', 'yellowish_skin', 'nausea', 'loss_of_appetite', 'family_history',		
' joint_pain',' vomiting', 'fatigue', 'yellowish_skin', 'dark_urine',' nausea', 'loss_of_appetite','abdominal_pain',' yellowing_of_eyes',			
 'joint_pain',' vomiting', 'fatigue', 'high_fever', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'abdominal_pain', 'yellowing_of_eyes', 'coma', 'stomach_bleeding',			
 'vomiting',' yellowish_skin', 'abdominal_pain', 'swelling_of_stomach','distention_of_abdomen','history_of_alcohol_consumption','fluid_overload',			
 'chills', 'vomiting', 'fatigue', 'weight_loss', 'cough', 'high_fever', 'breathlessness',' sweating', 'loss_of_appetite', 'mild_fever',' yellowing_of_eyes', 'swelled_lymph_nodes', 'malaise', 'phlegm'			
 'continuous_sneezing', 'fatigue', 'cough', 'high_fever', 'headache', 'swelled_lymph_nodes', 'malaise', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain'			
 'fatigue', 'cough', 'high_fever', 'breathlessness', 'sweating', 'malaise', 'phlegm', 'chest_pain', 'fast_heart_rate', 'rusty_sputum',			
 'constipation', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus',			
 'breathlessness', 'sweating', 'chest_pain','vomiting',			
 'fatigue', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'prominent_veins_on_calf',			
 'fatigue', 'weight_gain', 'cold_hands_and_feets', 'mood_swings',' lethargy', 'dizziness',' puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties',' depression', 'irritability', 'abnormal_menstruation',			
 'vomiting', 'fatigue', 'anxiety', 'sweating', 'headache',' nausea', 'blurred_and_distorted_vision', 'excessive_hunger', 'slurred_speech', 'irritability', 'palpitations',		
 'joint_pain', 'neck_pain', 'knee_pain', 'hip_joint_pain', 'swelling_joints', 'painful_walking',		
 'muscle_weakness',' stiff_neck',' swelling_joints',' movement_stiffness',' painful_walking',
'vomiting',' headache',' nausea',' spinning_movements',' loss_of_balance',' unsteadiness',
'pus_filled_pimples',' blackheads',' scurring','skin_rush','scurring',
 'burning_micturition',' bladder_discomfort',' foul_smell_of urine',' continuous_feel_of_urine',
 'skin_rash',' joint_pain',' skin_peeling',' silver_like_dusting',' small_dents_in_nails',' inflammatory_nails',			
 'skin_rash',' high_fever',' blister',' red_sore_around_nose',' yellow_crust_ooze',
 'skin_rash',' nodal_skin_eruptions',' dischromic _patches',			
 'acidity',' ulcers_on_tongue',' vomiting',' cough',' chest_pain',			
 'skin_rash',' stomach_pain',' burning_micturition',' spotting_ urination',		
 'indigestion',' loss_of_appetite',' abdominal_pain',' passage_of_gases',' internal_itching',
 'muscle_wasting',' patches_in_throat',' high_fever',' extra_marital_contacts',			
 'weight_loss',' restlessness',' lethargy',' irregular_sugar_level',' blurred_and_distorted_vision',' obesity',' excessive_hunger',' increased_appetite',' polyuria',		
 'sunken_eyes',' dehydration',' diarrhoea']
# area_list = list(df['Area'].unique())
symp_list = list(df['symp'].unique())

# Define custom CSS
button_style = """
    <style>
        div.stButton > button:first-child {
            padding: 0.75rem 3rem;
            font-size: 50 em;
        }
    </style>
"""

# Add custom CSS to app
st.markdown(button_style, unsafe_allow_html=True)


#create a button in a sidebar
st.sidebar.title('Please Select a type of Recommendation')
st.sidebar.write('symp options given')
old_cuisine = symp_list[0]
cuisine = st.selectbox('Select a symp-1', symp_list)
rest = st.selectbox('Select a symp-2', symp_list)
print(rest)
# print(change ) everytime a new item selected form selectbox


if st.sidebar.button('Diseases-Name'):
    st.sidebar.write('Ask symp')
    output = recommend_rest(rest)
    st.write(output)
    tab1,tab2,tab3,tab4,tab5,tab6 = st.tabs(output)

    for o in output:
        st.markdown(f"[{o[0]}]({o[1]})")
        st.markdown("------------")
        for element in o:
            st.markdown("- "+o)
