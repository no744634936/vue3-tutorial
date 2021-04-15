<template>
    <binding_text/>
    <binding_html/>
    <binding_attributes/>
    <binding_class/>
    <p>-----------------if-----------------</p>
    <if_part/>

    <p>---------------- for render list ---</p>
    <for_render_list/>

    <p>---------------methods--------------</p>
    <methods/>

    <p>---------------event_handling--------------</p>
    <event_handling/>

    <p>---------------form_handling--------------</p>
    <form_handling/>

    <p>---------------v_once_pre--------------</p>
    <v_once_pre/>

    <p>---------------computed_property--------------</p>
    <computed_property/>

    <p>---------------watcher--------------</p>
    <watcher/>

    <p>---------------component_property--------------</p>
    <component_property :name="name" :hero-name="channel" />
    <component_property name="Bruce" hero-name="Batman" />
    <component_property name="Clark" hero-name="Superman" />
    <component_property name="Diana" hero-name="Wonder Woman" />

    <p>---------------property_types_validation--------------</p>
    <!-- v-bind 也就是:将"50" 转化成数字 将"true"  转化成boolean -->
    <Article id="my-article" :likes="50" :isPublished="true" />

    <p>--------------non_prop_attr---------------------------</p>
    <non_prop_attr id="my-article" :likes="50" :isPublished="true" class="test_test"/>

    <p>------------- Provide/ Inject --------------------------------</p>
    <p>使用provide 跟inject向 孙component里面传值</p>
    <h3>App component {{ name }}</h3>
    <ComponentC />

    <p>-------------component event子向父传递事件或变量</p>
    <!-- 子组件用@click="$emit('close')声明事件，父组件用@close监听事件 -->
     <button @click="showPopup = true">Show Popup</button>
    <Popup v-show="showPopup" @close="closePopup" />


    <p>-------------component event emit 数据的验证</p>
    <!-- 只有输入了name之后才能emit ,否则会发出警告再console里-->
     <button @click="showPopup = true">Show Popup</button>
    <Popup2 v-show="showPopup" @close="closePopup" />

    <p>-----------在子component里面使用v-model--------</p>
    <p> 固定写法</p>
    <Input v-model="test_name" />

    <p>-----------slot 往子component里面传 html元素--------</p>
    <Card></Card>
    <Card>Card Content</Card>
    <Card><h2>Card Content</h2></Card>
    <Card><img src="https://picsum.photos/200" /></Card>


    <p>-----------当一个子component里面有很多slot的时候--------</p>
    <Card2>
        <template v-slot:header>
        <h3>Header</h3>
        </template>
        <template v-slot:default>
        <img src="https://picsum.photos/200" />
        </template>
        <template v-slot:footer>
        <button>View Details</button>
        </template>
    </Card2>

    <p>-----------有的页面显示子component的firstname-----</p>
    <p>-----------有的页面显示子component的lastname------</p>
    <p>-----------有的页面显示子component的fullname------</p>
    <p>-----------父component有选择的显示子component的数据，就用slot props------</p>
    <NameList>
        <template v-slot:default="slotProps">
        {{ slotProps.firstName }}
        </template>
    </NameList>

    <NameList>
        <template v-slot:default="slotProps">
        {{ slotProps.lastName }}
        </template>
    </NameList>

    <NameList>
        <template v-slot:default="slotProps">
        {{ slotProps.lastName }}, {{ slotProps.firstName }}
        </template>
    </NameList>

    <p>---------------点击一个tab，出现一个对应的component就用dynamic component</p>
    <dynamic_component/>

    <p>-----------------teleport----------------</p>
    <!-- 会将这个component放入public/index.html 里的  <div id="modal-root"></div> -->
      <button @click="showModal = true">Show Modal</button>
      <teleport to="#modal-root">
        <Modal v-show="showModal" @close="showModal = false">
          This is the secret modal message!
        </Modal>
      </teleport>
    
    <p>-------------axios get-----------------</p>
    <post_list/>

    <p>-------------axios post----------------</p>
    <create_post/>

    <p>------------获取html，或component的参照-</p>
    <template_ref/>
</template>

<script>
import binding_text from './components/binding_text.vue'
import binding_html from './components/binding_html.vue'
import binding_class from './components/binding_class.vue'
import binding_attributes from './components/binding_attributes.vue'
import if_part from './components/if.vue'
import for_render_list from './components/for_render_list.vue'
import methods from './components/methods.vue'
import event_handling from './components/event_handling.vue'
import form_handling from './components/form_handling.vue'
import v_once_pre from './components/v_once_pre.vue'
import computed_property from './components/computed_property.vue'
import watcher from './components/watcher.vue'
import component_property from './components/component_property.vue'
import Article from './components/property_types_validation.vue'
import non_prop_attr from './components/non_prop_attr.vue'
import ComponentC from './components/provide_inject/componentC.vue'
import Popup from './components/component_event.vue'
import Popup2 from './components/component_event_emit_validation.vue'
import Input from './components/component_v-model.vue'
import Card from './components/slot.vue'
import Card2 from './components/named_slot.vue'
import NameList from './components/slot_props.vue'
import dynamic_component from './components/dynamic_component/dynamic_component.vue'
import Modal from './components/modal.vue'
import post_list from './components/http/post_list.vue'
import create_post from './components/http/create_post.vue'
import template_ref from './components/template_ref.vue'


export default {
  name: 'App',
  components: {
    binding_text,
    binding_html,
    binding_attributes,
    binding_class,
    if_part,
    for_render_list,
    methods,
    event_handling,
    form_handling,
    v_once_pre,
    computed_property,
    watcher,
    component_property,
    Article,
    non_prop_attr,
    ComponentC,
    Popup,
    Popup2,
    Input,
    Card,
    Card2,
    NameList,
    dynamic_component,
    Modal,
    post_list,
    create_post,
    template_ref
  },
    data() {
        return {
        name: 'Vishwas',
        channel: 'Codevolution',
        showPopup: false,
        username: '',
        friends: ['Chandler', 'Joey', 'Monica'],
        activeTab: 'TabA',
        test_name:'',
        showModal:false,
        }
    },
    provide() {
        return {
            userName: this.name,
        }
    },
    methods:{
        closePopup(name){
            this.showPopup=false;
            console.log('name',name);
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
