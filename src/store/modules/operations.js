import vue from 'vue';
const operationsStore = {
	namespaced: true,
	state: {
		list: {
			1: {
				type: 'Income',
				comment: 'First income',
				value: 100,
				id: 1,
			},
			2: {
				type: 'Outcome',
				comment: 'First outcome',
				value: -50,
				id: 2,
			}
		}
	},
	getters: {
		//operationsList: ({ list }) => Object.values(list)
		operationsList: ({list})=>{
			return list;
		}
	},
	mutations: {
		ADD_OPERATION(state, operation) {
			console.log(operation);
vue.set(state.list,operation.id,operation);
		}
	},
	actions: {
		addNewOperation({ commit }, data) {
			const newObj = {
				...data,
				id: String(Math.random())
			};

			commit('ADD_OPERATION',newObj);
		}
	}

};

export default operationsStore;
