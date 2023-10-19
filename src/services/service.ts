import axios, {AxiosInstance} from 'axios';

export const githubApi: AxiosInstance = axios.create({
	baseURL: 'https://api.github.com/repos/facebook/react',
	headers: {
		Authorization: 'Bearer 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'
	}
});