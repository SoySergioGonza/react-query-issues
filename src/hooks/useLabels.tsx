import {useQuery} from 'react-query';
import {githubApi} from '../services/service';
import {Label} from '../interfaces/';
import {sleep} from '../helpers/';

const getLabels = async (): Promise<Label[]> => {
	await sleep(2);
	const {data} = await githubApi.get<Label[]>('/labels?per_page=100');
	console.log('data labels', data);
	return data;
};

export const useLabels = () => {
	
	return useQuery(
		['labels'],
		getLabels,
		{
			staleTime: 1000 * 60 * 60,
			// placeholderData: [],
			// initialData: [],
			placeholderData: [
				{
					id: 69105383,
					node_id: 'MDU6TGFiZWw2OTEwNTM4Mw==',
					url: 'https://api.github.com/repos/facebook/react/labels/Browser:%20IE',
					name: 'Browser: IE',
					color: 'c7def8',
					default: false,
				},
				{
					id: 739761016,
					node_id: 'MDU6TGFiZWw3Mzk3NjEwMTY=',
					url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Reconciler',
					name: 'Component: Reconciler',
					color: 'f9a798',
					default: false,
				}
			]
		}
	);
	
	
	return;
};