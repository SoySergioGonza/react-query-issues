import axios from 'axios';

export const githubApi = axios.create({
	baseURL: 'https://api.github.com/repos/facebook/react',
	headers: {
		Authorization: 'Bearer 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'
	}
});