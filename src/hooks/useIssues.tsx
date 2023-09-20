import {Issue} from '../interfaces';
import {githubApi} from '../services/service';
import {useQuery} from 'react-query';

const getIssues = async (): Promise<Issue[]> => {
	const {data} = await githubApi.get<Issue[]>('/issues');
	console.log('data', data);
	return data;
	
};


export const useIssues = () => {
	
	const issuesQuery = useQuery(
		['issues'],
		getIssues
	);
	
	return {
		issuesQuery
	};
};