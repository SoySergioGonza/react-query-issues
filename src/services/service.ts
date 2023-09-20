import axios from 'axios';

export const githubApi = axios.create({
	baseURL: 'https://api.github.com/repos/facebook/react',
	headers: {
		Authorization: 'Bearer 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'
	}
});